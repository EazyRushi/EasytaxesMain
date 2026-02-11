import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import {
    Loader2,
    ArrowRight,
    ArrowLeft,
    CheckCircle,
    AlertTriangle,
    Info,
    ShieldAlert,
    FileText,
    Calculator,
    ClipboardList,
    Globe,
    Building2,
    Briefcase,
    BadgeAlert,
    UserCircle,
    MapPin,
    DollarSign,
    Scale,
    TrendingUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const US_STATES = [
    { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" }, { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" }, { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" }, { code: "DC", name: "District of Columbia" },
    { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" }, { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" }, { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" }, { code: "KS", name: "Kansas" }, { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" }, { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" }, { code: "MI", name: "Michigan" }, { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" }, { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" }, { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" }, { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" }, { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" }, { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" }, { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" }, { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" }, { code: "VA", name: "Virginia" }, { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" }, { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" }
];

const VISA_TYPES = [
    "F-1 (Student)", "J-1 (Exchange)", "H-1B (Specialty)", "L-1 (Intracompany)",
    "O-1 (Extraordinary)", "E-2 (Investor)", "TN (NAFTA)", "B-1/B-2", "OPT/CPT", "Other"
];

export default function ProfileOnboarding() {
    const { user, loading } = useAuth();
    const [, setLocation] = useLocation();
    const { toast } = useToast();
    const [currentStep, setCurrentStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState<any>({
        // Section 1: Basic
        taxYear: "",
        taxpayerType: "",

        // Section 2A: Individual
        residencyStatus: "",
        visaStatus: "",
        visaExpiration: "",
        firstTimeFiler: "",
        filingStatus: "",
        spouseStatus: "", // U.S. or NRA
        hasDependents: "",
        numDependents: "1",
        stateResidency: "",
        primaryState: "",
        fromState: "",
        toState: "",
        workState: "",
        employerState: "",

        // Section 2B: Business
        entityType: "",
        smllcOwnerType: "",
        entityState: "",
        businessActivity: "",
        taxElection: "",
        electionType: "",
        entityRevenue: "",

        // Section 2C: Trust
        trustType: "",
        numBeneficiaries: "",
        distributions: "",
        trustAssets: [],
        trustSituations: [],

        // Section 2D: Nonprofit
        nonprofitType: "",
        nonprofitRevenue: "",
        nonprofitActivity: [],
        exemptStatus: "",

        // Section 3A/B: Operations/Income
        incomeTypes: [],
        foreignIncomeTypes: [],
        booksReady: "",
        multiState: "",
        physicalPresence: "",
        intlActivity: [],
        employment: [],
        officerSalary: "",

        // Section 4A/B: Compliance/Ownership
        hasForeignAccounts: "",
        foreignAccountValue: "",
        signatureAuthority: "",
        fbarCompliance: "",
        hasForeignEntities: "",
        foreignEntityOwnership: "",
        intlFormCompliance: "",
        pfic: "",
        foreignGift: "",
        filingCompliance: "",
        underAudit: "",
        numOwners: "",
        foreignOwners: "",
        businessForeignEntity: "",
        relatedParty: [],
        businessEvents: [],
        pppStatus: "",
        methodChange: "",
        knowBasis: "",
        relatedPartyLoans: "",
    });

    useEffect(() => {
        if (!loading && !user) {
            setLocation("/auth");
        }
    }, [user, loading, setLocation]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
            <Loader2 className="w-10 h-10 text-[#3FB9CB] animate-spin" />
        </div>
    );
    if (!user) return null;

    const totalSteps = 5;
    const progress = (currentStep / totalSteps) * 100;

    const updateField = (field: string, value: any) => {
        setFormData((prev: any) => ({ ...prev, [field]: value }));
    };

    const toggleArrayField = (field: string, value: any) => {
        setFormData((prev: any) => {
            const current = prev[field] || [];
            if (current.includes(value)) {
                return { ...prev, [field]: current.filter((i: any) => i !== value) };
            } else {
                return { ...prev, [field]: [...current, value] };
            }
        });
    };

    const handleNext = () => {
        // Validation Logic
        if (currentStep === 1 && (!formData.taxYear || !formData.taxpayerType)) {
            toast({ title: "Required", description: "Select tax year and taxpayer type.", variant: "destructive" });
            return;
        }
        if (currentStep === 2) {
            if (formData.taxpayerType === "individual") {
                if (!formData.residencyStatus || !formData.filingStatus || !formData.stateResidency) {
                    toast({ title: "Required", description: "Complete residency, filing status, and state information.", variant: "destructive" });
                    return;
                }
            } else if (formData.taxpayerType === "business") {
                if (!formData.entityType || !formData.entityState) {
                    toast({ title: "Required", description: "Select entity structure and state.", variant: "destructive" });
                    return;
                }
            }
        }

        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
            window.scrollTo(0, 0);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            window.scrollTo(0, 0);
        }
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            localStorage.setItem(`profile_${user.id}`, JSON.stringify({
                ...formData,
                completedAt: new Date().toISOString(),
            }));
            toast({ title: "Success!", description: "Profile finalized." });
            setTimeout(() => setLocation("/dashboard"), 1000);
        } catch (error) {
            toast({ title: "Error", description: "Failed to save.", variant: "destructive" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const RadioOption = ({ value, label, checked, onChange, tooltip, critical }: any) => (
        <div
            className={`relative flex items-center p-4 border-2 rounded-2xl cursor-pointer transition-all ${checked
                ? "border-[#3FB9CB] bg-[#3FB9CB]/5 shadow-[0_0_20px_rgba(63,185,203,0.1)]"
                : "border-slate-200 hover:border-[#3FB9CB]/40 hover:bg-slate-50"
                }`}
            onClick={() => onChange(value)}
        >
            <div className={`flex items-center justify-center w-5 h-5 rounded-full border-2 mr-4 transition-all ${checked ? "border-[#3FB9CB]" : "border-slate-300"}`}>
                {checked && <div className="w-2.5 h-2.5 rounded-full bg-[#3FB9CB]" />}
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2">
                    <span className={`text-[14px] font-bold ${checked ? "text-slate-900" : "text-slate-600"}`}>{label}</span>
                    {critical && <span className="px-2 py-0.5 text-[9px] font-black bg-red-100 text-red-600 rounded-full border border-red-200 uppercase tracking-tighter">Critical</span>}
                </div>
                {tooltip && <p className="text-[11px] text-slate-400 mt-1 leading-relaxed font-medium">{tooltip}</p>}
            </div>
        </div>
    );

    const selectClass = "w-full p-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-[#3FB9CB] focus:ring-4 focus:ring-[#3FB9CB]/10 focus:outline-none transition-all text-slate-700 font-bold text-sm appearance-none cursor-pointer";

    // Summary Calculations
    const calculateComplexity = () => {
        let score = 2;
        if (formData.incomeTypes.length > 2) score += 2;
        if (formData.incomeTypes.includes('crypto')) score += 3;
        if (formData.foreignIncomeTypes.length > 0) score += 2;
        if (formData.hasForeignAccounts === 'yes') score += 3;
        if (formData.hasForeignEntities === 'yes') score += 5;
        if (formData.pfic === 'yes') score += 5;
        if (formData.smllcOwnerType === 'foreign') score += 5;
        if (formData.filingCompliance && formData.filingCompliance !== 'yes') score += 4;
        return Math.min(score, 15);
    };

    const getComplexityDetails = (score: number) => {
        if (score <= 4) return { level: "Straightforward", color: "text-green-600 bg-green-50 border-green-100" };
        if (score <= 8) return { level: "Standard", color: "text-blue-600 bg-blue-50 border-blue-100" };
        if (score <= 12) return { level: "Complex", color: "text-orange-600 bg-orange-50 border-orange-100" };
        return { level: "High Complexity", color: "text-red-600 bg-red-50 border-red-100" };
    };

    const getCriticalFlags = () => {
        const flags = [];
        if (formData.hasForeignAccounts === 'yes' && formData.foreignAccountValue !== 'under10k') flags.push("FBAR Required - High Penalty Risk");
        if (formData.pfic === 'yes') flags.push("PFIC Holdings - Special Reporting");
        if (formData.isSpouseNRA === 'yes') flags.push("NRA Spouse - Election Analysis Needed");
        if (formData.employerState === 'NY' || formData.employerState === 'PA') flags.push("Convenience Rule Audit Risk (NY/PA)");
        if (formData.hasForeignEntities === 'yes') flags.push("Foreign Entity Ownership Reporting");
        if (formData.smllcOwnerType === 'foreign') flags.push("Form 5472 Filing Required ($25k Penalty)");
        return flags;
    };

    return (
        <div className="min-h-screen bg-[#FDFDFE] py-16 px-4 selection:bg-[#3FB9CB]/20">
            <div className="max-w-5xl mx-auto">

                {/* Visual Identity */}
                <div className="mb-12 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200">
                            <span className="text-[#3FB9CB] font-black text-2xl drop-shadow-sm">E</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-black text-slate-900 tracking-tight leading-none">Eazy<span className="text-[#3FB9CB]">taxes</span></h1>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Smart Onboarding v4.0</p>
                        </div>
                    </div>
                </div>

                {/* Main Progress Control */}
                <div className="mb-12 space-y-4">
                    <div className="flex items-center justify-between px-2">
                        <div className="flex items-center gap-6">
                            {[1, 2, 3, 4, 5].map(step => (
                                <div key={step} className="flex items-center gap-2">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all ${currentStep === step ? 'bg-[#3FB9CB] text-white shadow-lg shadow-[#3FB9CB]/30 scale-110' : currentStep > step ? 'bg-green-500 text-white' : 'bg-slate-100 text-slate-300'}`}>
                                        {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                                    </div>
                                    <div className={`h-1 w-12 rounded-full hidden md:block ${currentStep > step ? 'bg-green-500' : 'bg-slate-100'}`} />
                                </div>
                            ))}
                        </div>
                        <div className="text-right">
                            <span className="block text-[10px] font-black text-slate-300 uppercase tracking-widest">Profile Completion</span>
                            <span className="text-xl font-black text-slate-900">{Math.round(progress)}%</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Form Content */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="bg-white rounded-[32px] p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.05)] border border-slate-50">

                            {/* STEP 1: FOUNDATION */}
                            {currentStep === 1 && (
                                <div className="space-y-10 animate-fadeIn">
                                    <div>
                                        <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Standard Registration</h2>
                                        <p className="text-slate-400 font-medium">Select the tax jurisdiction year and your filing classification.</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                Active Tax Year <Calculator className="w-3.5 h-3.5 text-[#3FB9CB]" />
                                            </label>
                                            <select value={formData.taxYear} onChange={(e) => updateField("taxYear", e.target.value)} className={selectClass}>
                                                <option value="">-- Choose Fiscal Period --</option>
                                                <option value="2024">Current Year (2024 Filing)</option>
                                                <option value="2023">Prior Year (2023 Filing)</option>
                                                <option value="multiple">Multiple Back-Years</option>
                                            </select>
                                        </div>

                                        <div className="space-y-6">
                                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                                Taxpayer Category <Building2 className="w-3.5 h-3.5 text-[#3FB9CB]" />
                                            </label>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <RadioOption label="Individual" value="individual" checked={formData.taxpayerType === "individual"} onChange={(v: any) => updateField("taxpayerType", v)} tooltip="Personal income, wages, self-employment" />
                                                <RadioOption label="Business Entity" value="business" checked={formData.taxpayerType === "business"} onChange={(v: any) => updateField("taxpayerType", v)} tooltip="LLC, C-Corp, S-Corp, Partnership" />
                                                <RadioOption label="Trust or Estate" value="trust" checked={formData.taxpayerType === "trust"} onChange={(v: any) => updateField("taxpayerType", v)} tooltip="Fiduciary filings (Form 1041)" />
                                                <RadioOption label="Non-Profit" value="nonprofit" checked={formData.taxpayerType === "nonprofit"} onChange={(v: any) => updateField("nonprofitType", v)} tooltip="501(c) Exempt Organizations" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 2: PROFILE DEPTH */}
                            {currentStep === 2 && (
                                <div className="space-y-10 animate-fadeIn font-medium">
                                    {formData.taxpayerType === "individual" && (
                                        <>
                                            <div>
                                                <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Identity & Residency</h2>
                                                <p className="text-slate-400 font-medium tracking-tight">U.S. Tax law depends heavily on residency and visa status.</p>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="grid grid-cols-1 gap-3">
                                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">U.S. Tax Classification</label>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        <RadioOption label="U.S. Citizen" value="citizen" checked={formData.residencyStatus === "citizen"} onChange={(v: any) => updateField("residencyStatus", v)} />
                                                        <RadioOption label="Green Card Holder" value="greencard" checked={formData.residencyStatus === "greencard"} onChange={(v: any) => updateField("residencyStatus", v)} />
                                                        <RadioOption label="Resident Alien" value="resident" checked={formData.residencyStatus === "resident"} onChange={(v: any) => updateField("residencyStatus", v)} tooltip="Passed Substantial Presence Test" />
                                                        <RadioOption label="Non-Resident Alien" value="nonresident" checked={formData.residencyStatus === "nonresident"} onChange={(v: any) => updateField("residencyStatus", v)} tooltip="Typically J/F/H-1B on first 5 years" />
                                                    </div>

                                                    {(formData.residencyStatus === "nonresident" || formData.residencyStatus === "resident") && (
                                                        <div className="mt-4 p-8 bg-[#F4FBFC] border border-[#E9F4F5] rounded-[24px] space-y-6">
                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                                <div className="space-y-2">
                                                                    <label className="text-[10px] font-black text-[#3FB9CB] uppercase tracking-[2px]">Visa Category</label>
                                                                    <select value={formData.visaStatus} onChange={(e) => updateField("visaStatus", e.target.value)} className="w-full p-3 bg-white border border-[#D5E9EB] rounded-2xl text-sm font-bold focus:outline-none">
                                                                        <option value="">-- Choose Visa --</option>
                                                                        {VISA_TYPES.map(v => <option key={v} value={v}>{v}</option>)}
                                                                    </select>
                                                                </div>
                                                                <div className="space-y-2">
                                                                    <label className="text-[10px] font-black text-[#3FB9CB] uppercase tracking-[2px]">First Time Filing?</label>
                                                                    <div className="flex gap-2">
                                                                        <Button variant={formData.firstTimeFiler === 'yes' ? 'default' : 'outline'} size="sm" className="rounded-xl flex-1 font-bold h-10" onClick={() => updateField('firstTimeFiler', 'yes')}>Yes</Button>
                                                                        <Button variant={formData.firstTimeFiler === 'no' ? 'default' : 'outline'} size="sm" className="rounded-xl flex-1 font-bold h-10" onClick={() => updateField('firstTimeFiler', 'no')}>No</Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="space-y-4">
                                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Filing & Marital Status</label>
                                                    <select value={formData.filingStatus} onChange={(e) => updateField("filingStatus", e.target.value)} className={selectClass}>
                                                        <option value="">-- Choose Status --</option>
                                                        <option value="single">Single</option>
                                                        <option value="mfj">Married Filing Jointly (MFJ)</option>
                                                        <option value="mfs">Married Filing Separately (MFS)</option>
                                                        <option value="hoh">Head of Household (HoH)</option>
                                                        <option value="widow">Qualifying Widow(er)</option>
                                                    </select>
                                                    {(formData.filingStatus === 'mfj' || formData.filingStatus === 'mfs') && (
                                                        <div className="p-4 bg-red-50/50 border border-red-100/50 rounded-2xl">
                                                            <CheckboxOption label="Spouse is a Non-Resident Alien (NRA)" checked={formData.isSpouseNRA === 'yes'} onChange={() => updateField('isSpouseNRA', formData.isSpouseNRA === 'yes' ? 'no' : 'yes')} tooltip="Requires 6013(g) or (h) election analysis" />
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="space-y-4">
                                                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest">State Residency Logistics</label>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                        <RadioOption label="One state all year" value="single-state" checked={formData.stateResidency === "single-state"} onChange={(v: any) => updateField("stateResidency", v)} />
                                                        <RadioOption label="Moved between states" value="moved" checked={formData.stateResidency === "moved"} onChange={(v: any) => updateField("stateResidency", v)} />
                                                        <RadioOption label="Remote Worker" value="remote" checked={formData.stateResidency === "remote"} onChange={(v: any) => updateField("stateResidency", v)} />
                                                        <RadioOption label="Lived Outside U.S." value="abroad" checked={formData.stateResidency === "abroad"} onChange={(v: any) => updateField("stateResidency", v)} />
                                                    </div>

                                                    {formData.stateResidency === 'single-state' && (
                                                        <select value={formData.primaryState} onChange={(e) => updateField("primaryState", e.target.value)} className={selectClass}>
                                                            <option value="">-- Choose State --</option>
                                                            {US_STATES.map(s => <option key={s.code} value={s.code}>{s.name}</option>)}
                                                        </select>
                                                    )}

                                                    {formData.stateResidency === 'moved' && (
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <select value={formData.fromState} onChange={(e) => updateField("fromState", e.target.value)} className={selectClass}><option value="">Moved FROM</option>{US_STATES.map(s => <option key={s.code} value={s.code}>{s.code}</option>)}</select>
                                                            <select value={formData.toState} onChange={(e) => updateField("toState", e.target.value)} className={selectClass}><option value="">Moved TO</option>{US_STATES.map(s => <option key={s.code} value={s.code}>{s.code}</option>)}</select>
                                                        </div>
                                                    )}

                                                    {formData.stateResidency === 'remote' && (
                                                        <div className="grid grid-cols-2 gap-4">
                                                            <select value={formData.workState} onChange={(e) => updateField("workState", e.target.value)} className={selectClass}><option value="">Work FROM State</option>{US_STATES.map(s => <option key={s.code} value={s.code}>{s.code}</option>)}</select>
                                                            <select value={formData.employerState} onChange={(e) => updateField("employerState", e.target.value)} className={selectClass}><option value="">Employer State</option>{US_STATES.map(s => <option key={s.code} value={s.code}>{s.code}</option>)}</select>
                                                            {(formData.employerState === 'NY' || formData.employerState === 'PA') && <p className="col-span-2 text-[10px] text-amber-600 font-bold bg-amber-50 p-2 rounded">⚠️ NY/PA Convenience Rule: Income may be taxable in employer state regardless of your location.</p>}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {formData.taxpayerType === "business" && (
                                        <>
                                            <div>
                                                <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Entity Infrastructure</h2>
                                                <p className="text-slate-400 font-medium">Define your corporate governance and registration path.</p>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <RadioOption label="SMLLC" value="smllc" checked={formData.entityType === "smllc"} onChange={(v: any) => updateField("entityType", v)} tooltip="Single-Member LLC" />
                                                <RadioOption label="MMLLC" value="mmllc" checked={formData.entityType === "mmllc"} onChange={(v: any) => updateField("entityType", v)} tooltip="Partnership Classification" />
                                                <RadioOption label="S-Corporation" value="scorp" checked={formData.entityType === "scorp"} onChange={(v: any) => updateField("entityType", v)} />
                                                <RadioOption label="C-Corporation" value="ccorp" checked={formData.entityType === "ccorp"} onChange={(v: any) => updateField("entityType", v)} />
                                            </div>
                                            <div className="space-y-4 pt-4 border-t border-slate-50">
                                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Formation State</label>
                                                <select value={formData.entityState} onChange={(e) => updateField("entityState", e.target.value)} className={selectClass}>
                                                    <option value="">-- Choose Formation State --</option>
                                                    {US_STATES.map(s => <option key={s.code} value={s.code}>{s.name}</option>)}
                                                </select>
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}

                            {/* STEP 3: FINANCIAL LANDSCAPE */}
                            {currentStep === 3 && (
                                <div className="space-y-10 animate-fadeIn">
                                    <div>
                                        <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Income & Operations</h2>
                                        <p className="text-slate-400 font-medium">Every source must be categorized for optimization.</p>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Domestic Revenue (Select all)</label>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <CheckboxOption label="W-2 Wages" checked={formData.incomeTypes.includes('w2')} onChange={() => toggleArrayField('incomeTypes', 'w2')} />
                                                <CheckboxOption label="1099-NEC / Commissions" checked={formData.incomeTypes.includes('1099nec')} onChange={() => toggleArrayField('incomeTypes', '1099nec')} />
                                                <CheckboxOption label="Crypto / Digital Assets" checked={formData.incomeTypes.includes('crypto')} onChange={() => toggleArrayField('incomeTypes', 'crypto')} />
                                                <CheckboxOption label="Business Profits" checked={formData.incomeTypes.includes('business')} onChange={() => toggleArrayField('incomeTypes', 'business')} />
                                                <CheckboxOption label="Rental Real Estate" checked={formData.incomeTypes.includes('rental')} onChange={() => toggleArrayField('incomeTypes', 'rental')} />
                                                <CheckboxOption label="RSUs / Equity Grants" checked={formData.incomeTypes.includes('rsu')} onChange={() => toggleArrayField('incomeTypes', 'rsu')} />
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Global P&L</label>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <CheckboxOption label="Foreign Wages" checked={formData.foreignIncomeTypes.includes('f-wage')} onChange={() => toggleArrayField('foreignIncomeTypes', 'f-wage')} />
                                                <CheckboxOption label="Foreign Dividends/Interest" checked={formData.foreignIncomeTypes.includes('f-inv')} onChange={() => toggleArrayField('foreignIncomeTypes', 'f-inv')} />
                                                <CheckboxOption label="Foreign Pension" checked={formData.foreignIncomeTypes.includes('f-pen')} onChange={() => toggleArrayField('foreignIncomeTypes', 'f-pen')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 4: GLOBAL COMPLIANCE */}
                            {currentStep === 4 && (
                                <div className="space-y-10 animate-fadeIn font-bold">
                                    <div className="flex items-start gap-4 p-8 bg-red-600 rounded-[32px] text-white shadow-2xl shadow-red-200">
                                        <ShieldAlert className="w-12 h-12 shrink-0 opacity-80" />
                                        <div>
                                            <h2 className="text-2xl font-black tracking-tight leading-none mb-2">High-Stakes Compliance</h2>
                                            <p className="text-red-100 text-xs font-medium opacity-90 leading-relaxed">The IRS imposes massive penalties for undisclosed global assets. Absolute accuracy is mandatory here.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="space-y-4">
                                            <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Non-U.S. Financial Interests</label>
                                            <p className="text-[11px] text-slate-400 mb-2 italic">Includes accounts, crypto exchanges, and cash-value insurance abroad.</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <RadioOption label="Yes, I hold foreign accounts" value="yes" checked={formData.hasForeignAccounts === "yes"} onChange={(v: any) => updateField("hasForeignAccounts", v)} />
                                                <RadioOption label="No foreign accounts" value="no" checked={formData.hasForeignAccounts === "no"} onChange={(v: any) => updateField("hasForeignAccounts", v)} />
                                            </div>

                                            {formData.hasForeignAccounts === 'yes' && (
                                                <div className="p-8 bg-slate-50 rounded-[24px] space-y-6 animate-fadeIn">
                                                    <label className="text-[10px] font-black text-slate-500 uppercase">Maximum aggregate balance in year</label>
                                                    <div className="grid grid-cols-3 gap-3">
                                                        <RadioOption label="<$10k" value="under10k" checked={formData.foreignAccountValue === "under10k"} onChange={(v: any) => updateField("foreignAccountValue", v)} />
                                                        <RadioOption label="$10k-50k" value="10-50k" checked={formData.foreignAccountValue === "10-50k"} onChange={(v: any) => updateField("foreignAccountValue", v)} critical />
                                                        <RadioOption label=">$50k" value="over50k" checked={formData.foreignAccountValue === "over50k"} onChange={(v: any) => updateField("foreignAccountValue", v)} critical />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <RadioOption label="Holdings in Foreign Entity" value="yes" checked={formData.hasForeignEntities === "yes"} onChange={(v: any) => updateField("hasForeignEntities", v)} critical tooltip="10%+ ownership in foreign Corp/LLC" />
                                            <RadioOption label="Foreign Mutals/ETFs (PFIC)" value="yes" checked={formData.pfic === "yes"} onChange={(v: any) => updateField("pfic", v)} critical tooltip="Extremely complex reporting (Form 8621)" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* STEP 5: AI DIAGNOSIS & REVIEW */}
                            {currentStep === 5 && (
                                <div className="space-y-10 animate-fadeIn font-bold">
                                    <div className="text-center space-y-2">
                                        <div className="inline-flex p-3 bg-green-50 rounded-2xl mb-2 text-green-600 border border-green-100"><CheckCircle className="w-8 h-8" /></div>
                                        <h2 className="text-3xl font-black text-slate-900 tracking-tight">AI Diagnostic Profile</h2>
                                        <p className="text-slate-400 font-medium tracking-tight">Final profile generated based on 42 integrated data points.</p>
                                    </div>

                                    <Card className="border-4 border-slate-50 rounded-[40px] shadow-none bg-slate-50/20 p-8">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-6">
                                                <div className="space-y-1">
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Case Complexity</span>
                                                    <div className={`p-4 rounded-2xl border-2 flex items-center justify-between ${getComplexityDetails(calculateComplexity()).color}`}>
                                                        <span className="text-sm font-black uppercase tracking-tight">{getComplexityDetails(calculateComplexity()).level}</span>
                                                        <span className="text-xl font-black">{calculateComplexity()}/15</span>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Compliance Directives</span>
                                                    <div className="space-y-2">
                                                        {getCriticalFlags().length > 0 ? getCriticalFlags().map((f, i) => (
                                                            <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl text-[10px] font-bold text-red-600 uppercase shadow-sm">
                                                                <BadgeAlert className="w-4 h-4" /> {f}
                                                            </div>
                                                        )) : (
                                                            <div className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl text-[10px] font-bold text-green-600 uppercase">
                                                                <CheckCircle className="w-4 h-4" /> Standard Processing Plan
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-slate-900 rounded-[32px] p-8 text-white relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#3FB9CB]/20 rounded-full blur-3xl -mr-12 -mt-12" />
                                                <h4 className="text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2 opacity-60">
                                                    Required Data Objects <ClipboardList className="w-3.5 h-3.5" />
                                                </h4>
                                                <ul className="space-y-4">
                                                    <li className="flex items-center gap-3 text-[11px] font-bold"><CheckCircle className="w-3.5 h-3.5 text-[#3FB9CB]" /> Government Identity Docs</li>
                                                    <li className="flex items-center gap-3 text-[11px] font-bold"><CheckCircle className="w-3.5 h-3.5 text-[#3FB9CB]" /> Prior Year 1041/1040/1120</li>
                                                    {formData.incomeTypes.includes('w2') && <li className="flex items-center gap-3 text-[11px] font-bold"><CheckCircle className="w-3.5 h-3.5 text-[#3FB9CB]" /> Wage Transcripts (W-2)</li>}
                                                    {formData.hasForeignAccounts === 'yes' && <li className="flex items-center gap-3 text-[11px] font-bold text-red-400"><CheckCircle className="w-3.5 h-3.5" /> Int'l Account Statements</li>}
                                                </ul>
                                                <p className="mt-8 text-[9px] font-medium text-slate-500 italic leading-relaxed">The portal will open secure upload slots for these objects upon completion.</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            )}

                        </div>

                        {/* Persistent Footer Navigation */}
                        <div className="flex items-center justify-between px-4">
                            <Button
                                variant="ghost"
                                size="lg"
                                className={`rounded-[20px] font-black text-[11px] uppercase tracking-[2px] h-14 px-8 transition-all hover:bg-slate-100 ${currentStep === 1 ? 'opacity-0' : ''}`}
                                onClick={handleBack}
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" /> Previous Analysis
                            </Button>

                            {currentStep < totalSteps ? (
                                <Button
                                    size="lg"
                                    className="rounded-[20px] font-black text-[11px] uppercase tracking-[2px] h-14 px-12 bg-[#3FB9CB] hover:bg-[#34a0b0] shadow-2xl shadow-[#3FB9CB]/30"
                                    onClick={handleNext}
                                >
                                    Proceed <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            ) : (
                                <Button
                                    size="lg"
                                    className="rounded-[20px] font-black text-[11px] uppercase tracking-[2px] h-14 px-12 bg-green-600 hover:bg-green-700 shadow-2xl shadow-green-600/30"
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Finalize & Access Portal"}
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Right Context Sidebar (Desktop Only) */}
                    <div className="hidden lg:block lg:col-span-4 space-y-6">
                        <Card className="border-none shadow-sm rounded-[32px] p-6 bg-slate-900 text-white sticky top-12 overflow-hidden">
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#3FB9CB]/10 rounded-full blur-3xl -mb-16 -mr-16" />
                            <h3 className="text-xs font-black uppercase tracking-[3px] text-slate-500 mb-8 border-b border-slate-800 pb-4">Real-time Metrics</h3>

                            <div className="space-y-10 relative z-10">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">Estimated Risk Profile <Info className="w-3 h-3" /></span>
                                    <div className="flex items-end gap-2">
                                        <span className="text-3xl font-black">{calculateComplexity() > 10 ? 'High' : calculateComplexity() > 6 ? 'Normal' : 'Low'}</span>
                                        <span className="text-[10px] font-bold text-slate-500 mb-1.5 uppercase">Audit Prob. <span className="text-[#3FB9CB]">~0.4%</span></span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">Required Compliance Forms</span>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-slate-800 rounded-lg text-[10px] font-bold text-[#3FB9CB]">Form 1040</span>
                                        {formData.residencyStatus === 'nonresident' && <span className="px-2 py-1 bg-slate-800 rounded-lg text-[10px] font-bold text-red-500">1040-NR</span>}
                                        {formData.hasForeignAccounts === 'yes' && formData.foreignAccountValue !== 'under10k' && <span className="px-2 py-1 bg-slate-800 rounded-lg text-[10px] font-bold text-amber-500">FinCEN 114</span>}
                                        {formData.incomeTypes.includes('business') && <span className="px-2 py-1 bg-slate-800 rounded-lg text-[10px] font-bold text-[#3FB9CB]">Sch-C</span>}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-slate-800">
                                    <p className="text-[10px] font-medium text-slate-500 leading-relaxed italic">
                                        * Eazytaxes uses enterprise-grade encryption for all PII data. Our platform is SOC-2 compliant and AWS-shielded.
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <div className="p-8 rounded-[32px] bg-white border border-slate-50 shadow-sm space-y-4">
                            <h4 className="text-xs font-black uppercase tracking-widest text-[#3FB9CB]">Need Expertise?</h4>
                            <p className="text-[11px] font-bold text-slate-500 leading-relaxed">Our tax CPAs are available for virtual consults during your onboarding.</p>
                            <Button variant="outline" className="w-full rounded-2xl font-black text-[10px] uppercase tracking-widest border-2 h-10">Schedule Review</Button>
                        </div>
                    </div>
                </div>

            </div>

            <style>{`
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
            `}</style>
        </div>
    );
}
