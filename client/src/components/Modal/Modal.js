export default function Modal(props) {
  return (
    <div className="flex justify-center -mt-10 md:-mt-0">
      <div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}
