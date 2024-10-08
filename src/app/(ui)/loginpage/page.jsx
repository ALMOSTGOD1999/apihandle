import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <Link
              href="#"
              className="font-medium text-primary hover:text-primary/80"
              prefetch={false}
            >
              register for a new account
            </Link>
          </p>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Label
              htmlFor="username"
              className="block text-sm font-medium text-muted-foreground"
            >
              Username
            </Label>
            <div className="mt-1">
              <Input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label
                htmlFor="password"
                className="block text-sm font-medium text-muted-foreground"
              >
                Password
              </Label>
              <div className="text-sm">
                <Link
                  href="#"
                  className="font-medium text-primary hover:text-primary/80"
                  prefetch={false}
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div className="mt-1">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full appearance-none rounded-md border border-input bg-background px-3 py-2 placeholder-muted-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
              />
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
