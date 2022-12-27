export default function ModalHeader(props) {
  return (
    <div className="mx-auto bg-white  border-b-2 border-slate-400 mt-20 p-6 rounded justify-center">
      {props.children}
    </div>
  );
}
