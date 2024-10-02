type Props = {
  length: number; // Number가 아닌 소문자 number
};

export default function Skeleton({ length }: Props) {
  return (
    <>
      {Array.from({ length }).map((_, index) => (
        <div key={index} className="skeleton-container">
          <div className="skeleton-content"></div>
          <div className="skeleton-paragraph"></div>
          <div className="skeleton-paragraph2"></div>
        </div>
      ))}
    </>
  );
}
