import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md mx-4 glass-panel border-white/10">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h1 className="text-2xl font-display font-bold text-foreground">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            The spirit you are looking for has vanished into the mist.
          </p>

          <div className="mt-8 flex justify-end">
            <Link href="/" className="text-primary hover:underline hover:text-primary/80">
              Return to the Realm
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
