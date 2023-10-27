export default function Modal(props) {
  return (
    <div className="flex justify-center h-screen items-center">
      <div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
