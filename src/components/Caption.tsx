// Wraps a component with a centered caption
interface CaptionProps {
  children: React.ReactNode;
  caption: string;
}

export const Caption = ({ children, caption }: CaptionProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {children}
      <div
        style={{ marginTop: '1rem', fontSize: '1rem', fontStyle: 'italic', color: '#666' }}
      >
        {caption}
      </div>
    </div>
  );
};
