export const Footer = () => {
  return (
    <footer className="border-border bg-background text-muted-foreground flex w-full items-center justify-between border-t p-4 text-center text-sm">
      <div className="w-full text-center">
        &copy; {new Date().getFullYear()} FlowForge. All rights reserved.
      </div>
    </footer>
  );
};
