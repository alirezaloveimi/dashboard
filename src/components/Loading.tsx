const Loading = () => {
  return (
    <div
      style={{ backgroundImage: 'url("/images/body-background.jpg")' }}
      className="fixed inset-0 grid-center"
    >
      <div className="size-14 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
    </div>
  );
};

export default Loading;
