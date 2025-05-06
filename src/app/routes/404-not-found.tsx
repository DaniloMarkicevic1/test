import { LinkButton } from '@/components/ui/button/link-button';

const NotFound404 = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[100vw] h-[100vh] gap-7">
      <p className="text-lg">404 Page Not Found</p>
      <LinkButton to={'/'} text="Back to home" />
    </div>
  );
};

export default NotFound404;
