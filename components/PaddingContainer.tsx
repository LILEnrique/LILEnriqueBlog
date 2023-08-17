interface PaddingContainerProps {
  children: React.ReactNode;
}

const PaddingContainer = ({ children }: PaddingContainerProps) => {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-0">{children}</div>
  );
};

export default PaddingContainer;
