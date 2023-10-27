export default function ModalBody(props) {
  return (
    <div className="bg-slate-600 rounded-xl w-96 sm:w-screen max-w-lg">
      {props.children}
    </div>
  );
}
