import AuthForm from "@/components/AuthForm";

const page = () => {
  return (
    <div className="auth-layout bg-[url('/pattern.png')] bg-no-repeat bg-cover">
      {" "}
      <AuthForm type="sign-up" />
    </div>
  );
};

export default page;
