// export const getDate = (createdat) => {
//   const date = new Date(createdat);
//   const yyyy = date.getFullYear();
//   const mm = String(date.getMonth() + 1).padStart(2, "0");
//   const dd = String(date.getDate()).padStart(2, "0");
//   return `${yyyy}-${mm}-${dd}`.replaceAll("-", ".");
// };

export const getDate = (createdAt) => {
  const date = new Date(createdAt);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}.${mm}.${dd}. ${createdAt?.slice(12, 16).padStart(5, "0")}`;
};
