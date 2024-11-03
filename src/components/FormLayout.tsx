type FormLayoutProps = {
  children: React.ReactNode;
};

const FormLayout = ({ children }: FormLayoutProps) => {
  return (
    <div
      style={{ backgroundImage: 'url("/images/body-background.jpg")' }}
      className="h-screen flex-center-center bg-cover-center"
    >
      {children}
    </div>
  );
};

export default FormLayout;
