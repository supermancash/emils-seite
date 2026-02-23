import { useRouter } from "next/router";

export default function AcademicPublicationsPage() {
    const router = useRouter();
    const { pdfUrl } = router.query;

    if (!pdfUrl) return null;

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <iframe
                src={pdfUrl}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
            />
        </div>
    );
}
