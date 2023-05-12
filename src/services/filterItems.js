// const filterItems = (formData, items) => {
//   return items.filter(
//     ({ year, itemNumber, originalItem: itemText, points, rating }) => {
//       const {
//         year: formYear,
//         itemNumber: formNumber,
//         itemText: formText,
//         points: formPoints,
//         rating: formRating,
//       } = formData;
//       if (formYear.length === 4 && formYear != year) {
//         return false;
//       }
//       if (
//         formText &&
//         itemText &&
//         !itemText.toLowerCase().includes(formText.toLowerCase())
//       ) {
//         return false;
//       }
//       if (formNumber && formNumber == itemNumber) {
//         return false;
//       }
//       if (formPoints && formPoints != points) {
//         return false;
//       }
//       const ratings = ["", "?", "Safe", "Caution", "NSFP"];
//       if (ratings.indexOf(rating) > ratings.indexOf(formRating)) {
//         return false;
//       }
//       return true;
//     }
//   );
// };

// export default filterItems;
