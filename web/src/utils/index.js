export * from "./getRoutes";
export * from "./getCollapseStates";
export * from "./getActiveRoute";
export * from "./getForms";

// import { fromEvent } from 'file-selector';
// import { pdf } from '@react-pdf/renderer';
// import JsBarcode from 'jsbarcode';
// import printj from 'print-js';

export const handleChange = (e, setState) => {
  const { name, value } = e.target;
  setState((_v) => ({
    ..._v,
    [name]: value,
  }));
};

// export function textToBase64Barcode(text) {
//   var canvas = document.createElement('canvas');
//   canvas.id = 'tempbarcanva';
//   JsBarcode(canvas, text, { height: 40, fontSize: 12 });
//   const ret = canvas.toDataURL('image/png');
//   // document.querySelector("#tempbarcanva").remove();
//   return ret;
// }

// export async function imprimirDoc(doc) {
//   const blob = await pdf(doc).toBlob();
//   var pdfUrl = URL.createObjectURL(blob);
//   printj({
//     printable: pdfUrl,
//     onPrintDialogClose: () => {
//       document.querySelector('#printJS').remove();
//     },
//   });
// }

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const hasAccess = (acesso, nivel, disabled) => {
  const userPerms = JSON.parse(localStorage.getItem("perms"));
  const user = localStorage.getItem("username");
  if (nivel && user === "hibri") return false;
  if (
    disabled &&
    nivel &&
    userPerms &&
    userPerms[acesso] &&
    userPerms[acesso].includes(nivel)
  )
    return false;
  if (
    disabled &&
    nivel &&
    userPerms &&
    userPerms[acesso] &&
    !userPerms[acesso].includes(nivel)
  )
    return true;
  if (user === "admin") return true;
  if (
    nivel &&
    userPerms &&
    userPerms[acesso] &&
    userPerms[acesso].includes(nivel)
  )
    return true;
  if (!nivel && userPerms && userPerms[acesso]) return true;
  if (
    nivel &&
    userPerms &&
    userPerms[acesso] &&
    !userPerms[acesso].includes(nivel)
  )
    return true;
  return false;
};

export function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
        result[3],
        16
      )}`
    : null;
}

// const toBase64 = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });

// export function openFileDialog(accept, multiple, callback) {
//   // this function must be called from  a user
//   // activation event (ie an onclick event)

//   // Create an input element
//   var inputElement = document.createElement('input');
//   // Set its type to file
//   inputElement.type = 'file';
//   // Set accept to the file types you want the user to select.
//   // Include both the file extension and the mime type
//   inputElement.accept = accept;
//   // Accept multiple files
//   inputElement.multiple = multiple;
//   // set onchange event to call callback when user has selected file
//   inputElement.addEventListener('change', (evt) => {
//     fromEvent(evt).then(async (files) => {
//       files.forEach((file) => {
//         (async () => {
//           callback({
//             name: file.name,
//             content: await toBase64(file),
//           });
//         })();
//       });
//     });
//   });
//   // dispatch a click event to open the file dialog
//   inputElement.dispatchEvent(new MouseEvent('click'));
// }

export const findTreeItem = (arr, id) => {
  let obj;
  arr.forEach((item) => {
    if (item.filhos.length >= 1) {
      let temp = findTreeItem(item.filhos, id);
      if (temp) return (obj = temp);
    }
    if (obj && obj.id === Number(id)) return obj;
    if (Number(item.id) === Number(id)) return (obj = item);
    return obj;
  });
  return obj;
};

export function errorObjectConvert(err) {
  //Converte o erro em um Array com as entradas.
  let message = err.response
    ? typeof err.response.data === "object"
      ? Object.entries(err.response.data)
      : ""
    : err.response.data;
  return message;
}

export function normalize_cpf_cnpj(value) {
  const CPF_LENGTH = 11;
  const cnpjCpf = value.replace(/\D/g, "");
  if (cnpjCpf.length === CPF_LENGTH) {
    return cnpjCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }
  return cnpjCpf.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    "$1.$2.$3/$4-$5"
  );
}
