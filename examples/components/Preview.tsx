type PreviewProps = {
  children: React.ReactNode;
};

const Preview = ({ children }: PreviewProps) => {
  return (
    <div className="px-8 min-h-[200px] flex items-center justify-center bg-white rounded">
      {children}
    </div>
  );
};

export default Preview;
