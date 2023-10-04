import { Separator } from "@/components/ui/separator";

export default function ContentSettings() {
  return (
    <>
      <div className="space-y-0.5">
        <div>
          <h3 className="text-lg font-medium">Content Settings</h3>
          <p className="text-sm text-muted-foreground">
            This is how end-users will see how your website looks like.
          </p>
        </div>
        {/* <ProfileForm /> */}
      </div>
      <Separator className="my-6" />

      {/* <div className="space-y-0.5">
        <h3 className="text-lg font-medium">Student Management</h3>
        <p className="text-sm text-muted-foreground">
          Manage your students member and set data preferences.
        </p>
      </div> */}
    </>
  );
}
