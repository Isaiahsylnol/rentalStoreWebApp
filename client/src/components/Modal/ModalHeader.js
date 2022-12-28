export default function ModalHeader(props) {
  return (
    <div className="mx-auto bg-slate-600 mt-20 p-6 -m-8 rounded-3xl justify-center">
      {props.children}
    </div>
  );
}
