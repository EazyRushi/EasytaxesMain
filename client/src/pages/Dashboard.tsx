import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/use-auth";
import { Link, useLocation } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import {
    Loader2,
    FileText,
    CheckCircle,
    Clock,
    AlertCircle,
    TrendingUp,
    Calendar,
    Upload,
    User,
    Settings,
    LogOut,
    Home,
    Edit2,
    Eye
} from "lucide-react";
import { useEffect } from "react";
import { type Questionnaire } from "@shared/schema";

export default function Dashboard() {
    const { user, loading, signOut } = useAuth();
    const [, setLocation] = useLocation();
    const { toast } = useToast();

    useEffect(() => {
        if (!loading && !user) {
            setLocation("/auth");
        }
    }, [user, loading, setLocation]);

    const { data: questionnaire, isLoading: dataLoading } = useQuery<Questionnaire>({
        queryKey: ["/api/questionnaire"],
        enabled: !!user,
    });

    if (loading || dataLoading) {
        return <div className="min-h-screen flex items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-[#3FB9CB]" /></div>;
    }

    if (!user) return null;

    const status = questionnaire?.status || "draft";
    const lastUpdated = questionnaire?.updatedAt ? new Date(questionnaire.updatedAt).toLocaleDateString() : "N/A";

    // Calculate completion percentage
    const getCompletionPercentage = () => {
        if (!questionnaire?.data) return 0;
        const data = typeof questionnaire.data === 'string' ? JSON.parse(questionnaire.data) : questionnaire.data;
        let completedFields = 0;
        const totalFields = 10;

        if (data.firstName) completedFields++;
        if (data.lastName) completedFields++;
        if (data.filingStatus) completedFields++;
        if (data.incomeTypes?.length) completedFields++;
        if (data.deductionTypes?.length) completedFields++;
        if (data.creditTypes?.length) completedFields++;
        if (data.investmentInfo) completedFields++;
        if (data.dependents?.length) completedFields++;
        if (data.address) completedFields++;
        if (data.phone) completedFields++;

        return Math.round((completedFields / totalFields) * 100);
    };

    const completionPercentage = getCompletionPercentage();

    const handleSignOut = async () => {
        await signOut();
    };

    const handleAccountSettings = () => {
        toast({
            title: "Coming Soon",
            description: "Account settings will be available in the next update.",
        });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
            <Navbar />

            <main className="flex-1 container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-900 mb-2">
                            Welcome back, {user.email?.split('@')[0]}! 👋
                        </h1>
                        <p className="text-slate-600">Here's what's happening with your tax filing</p>
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={handleSignOut} className="gap-2">
                            <LogOut className="h-4 w-4" />
                            Sign Out
                        </Button>
                    </div>
                </div>

                {/* Status Alert */}
                {status === 'draft' && completionPercentage < 100 && (
                    <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                        <div>
                            <h3 className="font-semibold text-amber-900">Action Required</h3>
                            <p className="text-sm text-amber-700">Your questionnaire is {completionPercentage}% complete. Please complete it to proceed with filing.</p>
                        </div>
                    </div>
                )}

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Tax Return Status - Larger Card */}
                    <div className="lg:col-span-2">
                        <Card className="border-t-4 border-t-[#3FB9CB] shadow-lg">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <CardTitle className="text-2xl">2025 Tax Return</CardTitle>
                                        <CardDescription>Your current filing status</CardDescription>
                                    </div>
                                    <div className="h-12 w-12 rounded-full bg-[#3FB9CB]/10 flex items-center justify-center">
                                        <FileText className="h-6 w-6 text-[#3FB9CB]" />
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-slate-600 mb-1">Status</p>
                                        <Badge
                                            variant={status === 'submitted' ? 'default' : status === 'reviewed' ? 'secondary' : 'outline'}
                                            className={`text-sm ${status === 'submitted' ? 'bg-green-100 text-green-800 hover:bg-green-100' :
                                                status === 'reviewed' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' :
                                                    'bg-slate-100 text-slate-800 hover:bg-slate-100'
                                                }`}
                                        >
                                            {status === 'draft' ? (
                                                <span className="flex items-center gap-1">
                                                    <Edit2 className="h-3 w-3" />
                                                    Draft
                                                </span>
                                            ) : status === 'submitted' ? (
                                                <span className="flex items-center gap-1">
                                                    <CheckCircle className="h-3 w-3" />
                                                    Submitted
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-1">
                                                    <Eye className="h-3 w-3" />
                                                    Reviewed
                                                </span>
                                            )}
                                        </Badge>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-slate-600">Last Updated</p>
                                        <p className="font-semibold text-slate-900">{lastUpdated}</p>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-sm font-medium text-slate-700">Completion Progress</p>
                                        <p className="text-sm font-bold text-[#3FB9CB]">{completionPercentage}%</p>
                                    </div>
                                    <Progress value={completionPercentage} className="h-3" />
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {status === 'submitted' || status === 'reviewed' ? (
                                        <Button className="flex-1 bg-green-600 hover:bg-green-700" disabled>
                                            <CheckCircle className="mr-2 h-4 w-4" />
                                            Submitted
                                        </Button>
                                    ) : (
                                        <>
                                            <Link href="/questionnaire" className="flex-1">
                                                <Button className="w-full bg-[#3FB9CB] hover:bg-[#34a0b0]">
                                                    <FileText className="mr-2 h-4 w-4" />
                                                    {completionPercentage > 0 ? 'Continue Filing' : 'Start Filing'}
                                                </Button>
                                            </Link>
                                            {completionPercentage > 0 && (
                                                <Button variant="outline" className="flex-1">
                                                    <Upload className="mr-2 h-4 w-4" />
                                                    Upload Documents
                                                </Button>
                                            )}
                                        </>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Quick Stats */}
                    <div className="space-y-6">
                        <Card className="shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Account Status</CardTitle>
                                <User className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-green-600">Active</div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    Member since {user.created_at ? new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Recently'}
                                </p>
                                <Button variant="outline" className="w-full mt-4" size="sm" onClick={handleAccountSettings}>
                                    <Settings className="mr-2 h-3 w-3" />
                                    Account Settings
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="shadow-lg">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Tax Deadline</CardTitle>
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-orange-600">April 15</div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    2025 Filing Deadline
                                </p>
                                <div className="mt-4 p-3 bg-orange-50 rounded-md">
                                    <p className="text-xs font-medium text-orange-900">
                                        {Math.ceil((new Date('2025-04-15').getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))} days remaining
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Secondary Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Recent Activity */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-lg">Recent Activity</CardTitle>
                                <Clock className="h-5 w-5 text-muted-foreground" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-[#3FB9CB] mt-2" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Questionnaire Updated</p>
                                        <p className="text-xs text-muted-foreground">{lastUpdated}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="h-2 w-2 rounded-full bg-slate-300 mt-2" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Account Created</p>
                                        <p className="text-xs text-muted-foreground">
                                            {user.created_at ? new Date(user.created_at).toLocaleDateString() : 'Recently'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Actions */}
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle className="text-lg">Quick Actions</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Link href="/profile-onboarding">
                                <Button variant="ghost" className="w-full justify-start">
                                    <Edit2 className="mr-2 h-4 w-4" />
                                    Edit Tax Profile
                                </Button>
                            </Link>
                            <Link href="/questionnaire">
                                <Button variant="ghost" className="w-full justify-start">
                                    <FileText className="mr-2 h-4 w-4" />
                                    View Questionnaire
                                </Button>
                            </Link>
                            <Button variant="ghost" className="w-full justify-start">
                                <Upload className="mr-2 h-4 w-4" />
                                Upload Documents
                            </Button>
                            <Link href="/">
                                <Button variant="ghost" className="w-full justify-start">
                                    <Home className="mr-2 h-4 w-4" />
                                    Back to Home
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    {/* Help & Support */}
                    <Card className="shadow-lg bg-gradient-to-br from-[#3FB9CB]/5 to-[#3FB9CB]/10 border-[#3FB9CB]/20">
                        <CardHeader>
                            <CardTitle className="text-lg">Need Help?</CardTitle>
                            <CardDescription>Our team is here to assist you</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-slate-600">
                                Have questions about your tax filing? Contact our expert team.
                            </p>
                            <Button className="w-full bg-[#3FB9CB] hover:bg-[#34a0b0]">
                                Contact Support
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </main>

            <Footer />
        </div>
    );
}
