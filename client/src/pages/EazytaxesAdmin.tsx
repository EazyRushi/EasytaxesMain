import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Download,
  Eye,
  Users,
  FileText,
  Clock,
  CheckCircle2,
  XCircle,
  LogOut,
  LayoutDashboard,
  MessageSquare,
  Menu,
  X
} from "lucide-react";

import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

// Helper to parse questionnaire data safely
const parseData = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    return {};
  }
};

export default function EazytaxesAdmin() {
  const { data: questionnaires, isLoading } = useQuery<any[]>({
    queryKey: ["/api/admin/questionnaires"],
  });

  const submissions = (Array.isArray(questionnaires) ? questionnaires : []).map((q: any) => {
    const data = parseData(q.data);
    const fullName = `${data.firstName || ''} ${data.lastName || ''}`.trim() || q.email || 'Unknown User';

    // Calculate simple completion rate based on sections filled (approximation)
    let filledFields = 0;
    const totalTrackedFields = 5; // simplified
    if (data.firstName) filledFields++;
    if (data.filingStatus) filledFields++;
    if (data.incomeTypes?.length > 0) filledFields++;
    if (data.deductionTypes?.length > 0) filledFields++;
    if (data.creditTypes?.length > 0) filledFields++;

    const completionRate = Math.round((filledFields / totalTrackedFields) * 100);

    return {
      id: `QST-${q.id}`, // Format ID for display
      userName: fullName,
      email: q.email,
      submittedDate: q.updatedAt ? new Date(q.updatedAt).toLocaleDateString() : 'N/A',
      status: q.status || 'draft',
      filingStatus: data.filingStatus ? data.filingStatus.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) : 'Not Selection',
      incomeTypes: (Array.isArray(data.incomeTypes) ? data.incomeTypes : []).map((t: string) => t.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())),
      completionRate: completionRate,
      rawId: q.id, // Keep raw ID if needed
      rawData: data // Keep raw data for details view
    };
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedSubmission, setSelectedSubmission] = useState<any>(null);
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted": return "bg-green-100 text-green-800 border-green-300"; // Changed 'completed' to 'submitted' to match backend
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-300";
      case "draft": return "bg-slate-100 text-slate-800 border-slate-300";
      default: return "bg-slate-100 text-slate-800 border-slate-300";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "draft": return <Clock className="w-4 h-4" />;
      case "pending": return <Clock className="w-4 h-4" />;
      case "reviewed": return <Eye className="w-4 h-4" />;
      case "submitted": return <CheckCircle2 className="w-4 h-4" />;
      default: return <XCircle className="w-4 h-4" />;
    }
  };

  const filteredSubmissions = submissions.filter((sub: any) => {
    const matchesSearch = sub.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sub.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || sub.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: submissions.length,
    pending: submissions.filter((s: any) => s.status === "pending" || s.status === "draft").length, // treat draft as pending-ish for stats or separate
    reviewed: submissions.filter((s: any) => s.status === "reviewed").length,
    completed: submissions.filter((s: any) => s.status === "submitted").length
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin" /></div>;
  }

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "users", label: "Users", icon: Users },
    { id: "questionnaires", label: "Questionnaires", icon: FileText },
    { id: "contacts", label: "Contact Forms", icon: MessageSquare }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] flex">
      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-slate-200">
            <h1 className="text-2xl font-black text-slate-900">Eazytaxes</h1>
            <p className="text-xs text-slate-600 mt-1">Admin Panel</p>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveMenu(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeMenu === item.id
                    ? 'bg-[#3FB9CB] text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-200">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col min-h-screen">
        <div className="bg-white border-b border-slate-200 sticky top-0 z-30">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </Button>
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 capitalize">{activeMenu}</h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">Manage your {activeMenu}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">

            {activeMenu === "dashboard" && (
              <>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <Card className="p-4 sm:p-6 bg-white border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium">Total Submissions</p>
                        <p className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">{stats.total}</p>
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#3FB9CB] bg-opacity-10 flex items-center justify-center">
                        <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-[#3FB9CB]" />
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 sm:p-6 bg-white border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium">Pending Review</p>
                        <p className="text-2xl sm:text-3xl font-black text-yellow-600 mt-1">{stats.pending}</p>
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" />
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 sm:p-6 bg-white border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium">Under Review</p>
                        <p className="text-2xl sm:text-3xl font-black text-blue-600 mt-1">{stats.reviewed}</p>
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                        <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 sm:p-6 bg-white border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium">Completed</p>
                        <p className="text-2xl sm:text-3xl font-black text-green-600 mt-1">{stats.completed}</p>
                      </div>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-100 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                      </div>
                    </div>
                  </Card>
                </div>
              </>
            )}

            {activeMenu === "users" && (
              <Card className="p-8 bg-white border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 mb-4">User Management</h3>
                <p className="text-slate-600 mb-6">Manage all registered users and their access levels.</p>
                <div className="bg-slate-50 rounded-lg p-8 text-center">
                  <Users className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600">User management interface coming soon...</p>
                </div>
              </Card>
            )}

            {activeMenu === "questionnaires" && (
              <>
                <Card className="p-4 sm:p-6 mb-6 bg-white border-slate-200">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <Input
                        placeholder="Search by name, email, or ID..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant={filterStatus === "all" ? "default" : "outline"}
                        onClick={() => setFilterStatus("all")}
                        className={filterStatus === "all" ? "bg-[#3FB9CB] hover:bg-[#34a0b0]" : ""}
                      >
                        All
                      </Button>
                      <Button
                        variant={filterStatus === "draft" ? "default" : "outline"}
                        onClick={() => setFilterStatus("draft")}
                        className={filterStatus === "draft" ? "bg-slate-600 hover:bg-slate-700" : ""}
                      >
                        Drafts
                      </Button>
                      <Button
                        variant={filterStatus === "submitted" ? "default" : "outline"}
                        onClick={() => setFilterStatus("submitted")}
                        className={filterStatus === "submitted" ? "bg-yellow-600 hover:bg-yellow-700" : ""}
                      >
                        Pending Review
                      </Button>
                      <Button
                        variant={filterStatus === "reviewed" ? "default" : "outline"}
                        onClick={() => setFilterStatus("reviewed")}
                        className={filterStatus === "reviewed" ? "bg-blue-600 hover:bg-blue-700" : ""}
                      >
                        Reviewed
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="bg-white border-slate-200 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                          <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">ID</th>
                          <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">User</th>
                          <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider hidden md:table-cell">Filing Status</th>
                          <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider hidden lg:table-cell">Submitted</th>
                          <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Status</th>
                          <th className="px-4 sm:px-6 py-4 text-left text-xs font-bold text-slate-700 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {filteredSubmissions.map((submission) => (
                          <tr key={submission.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                              <span className="text-sm font-semibold text-slate-900">{submission.id}</span>
                            </td>
                            <td className="px-4 sm:px-6 py-4">
                              <div>
                                <p className="text-sm font-semibold text-slate-900">{submission.userName}</p>
                                <p className="text-xs text-slate-500">{submission.email}</p>
                              </div>
                            </td>
                            <td className="px-4 sm:px-6 py-4 hidden md:table-cell">
                              <span className="text-sm text-slate-700">{submission.filingStatus}</span>
                            </td>
                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap hidden lg:table-cell">
                              <span className="text-sm text-slate-700">{submission.submittedDate}</span>
                            </td>
                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                              <Badge className={`flex items-center gap-1 w-fit ${getStatusColor(submission.status)}`}>
                                {getStatusIcon(submission.status)}
                                <span className="capitalize">{submission.status}</span>
                              </Badge>
                            </td>
                            <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => setSelectedSubmission(submission)}
                                  className="text-[#3FB9CB] border-[#3FB9CB] hover:bg-[#3FB9CB] hover:text-white"
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="text-slate-600 hover:text-slate-900"
                                >
                                  <Download className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </>
            )}

            {activeMenu === "contacts" && (
              <Card className="p-8 bg-white border-slate-200">
                <h3 className="text-2xl font-black text-slate-900 mb-4">Contact Form Submissions</h3>
                <p className="text-slate-600 mb-6">View and manage all contact form submissions from your website.</p>
                <div className="bg-slate-50 rounded-lg p-8 text-center">
                  <MessageSquare className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600">Contact forms interface coming soon...</p>
                </div>
              </Card>
            )}

          </div>
        </div>

        {selectedSubmission && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedSubmission(null)}>
            <Card className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="p-6 border-b border-slate-200 sticky top-0 bg-white z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-black text-slate-900">{selectedSubmission.userName}</h2>
                    <p className="text-sm text-slate-600">{selectedSubmission.id}</p>
                  </div>
                  <Button variant="outline" onClick={() => setSelectedSubmission(null)}>Close</Button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-bold text-slate-700 mb-2">Contact Information</h3>
                    <div className="space-y-2">
                      <p className="text-sm"><span className="font-semibold">Email:</span> {selectedSubmission.email}</p>
                      <p className="text-sm"><span className="font-semibold">Submitted:</span> {selectedSubmission.submittedDate}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-slate-700 mb-2">Filing Details</h3>
                    <div className="space-y-2">
                      <p className="text-sm"><span className="font-semibold">Status:</span> {selectedSubmission.filingStatus}</p>
                      <p className="text-sm"><span className="font-semibold">Completion:</span> {selectedSubmission.completionRate}%</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-700 mb-3">Income Types</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSubmission.incomeTypes.map((type: string) => (
                      <Badge key={type} className="bg-[#3FB9CB] bg-opacity-10 text-[#3FB9CB] border-[#3FB9CB]">
                        {type}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h3 className="text-sm font-bold text-slate-700 mb-3">Actions</h3>
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Eye className="w-4 h-4 mr-2" />
                      Mark as Reviewed
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Mark as Completed
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
