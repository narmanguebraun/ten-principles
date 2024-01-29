export type PostCardProps = {
  id: number;
  title: string;
  body: string;
};

export function PostCard({ id, title, body }: PostCardProps) {
  return (
    <div key={id}>
      <h2 className="font-semibold">
        {id} &mdash; {title}
      </h2>
      <div className="text-gray-400">{body && <>{body}</>}</div>
    </div>
  );
}
