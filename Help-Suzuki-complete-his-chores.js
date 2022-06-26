// https://www.codewars.com/kata/584dc1b7766c2bb158000226

/*Description:
  Suzuki has a long list of chores required to keep the monastery in good order.
  Each chore can be completed independent of the others and assigned to any student.
  He needs to assign two chores to each student in a way which minimizes the total
  duration of the day's work. There will always be an even number of chores and enough
  students to complete them

  У Судзуки есть длинный список дел, необходимых для поддержания монастыря в порядке.
  Каждое задание можно выполнять независимо от других и поручить любому ученику.
  Он должен поручить каждому ученику по две работы таким образом, чтобы свести к минимуму
  общую сумму продолжительность рабочего дня. Всегда будет четное количество дел по дому и достаточно
  студентов, чтобы завершить их



  You will be given an array containing the estimated duration of each chore such as:

  Вам будет предоставлен массив, содержащий предполагаемую продолжительность каждой работы, например:
  10 ≤ chores length ≤ 30


  Return an array with each students work duration in ascending order such that the last element represents
  the total duration of the day's work.
  Each integer in the return array is the sum of each students two assigned chores

  Возвращает массив с продолжительностью работы каждого учащегося в порядке возрастания,
  чтобы последний элемент представлял обшую продолжительность рабочего дня.
  Каждое целое число в возвращаемом массиве представляет собой сумму двух назначенных работ каждого учащегося.

  chores = [1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9]
  Chore 1 = 2hrs
  Chore 2 = 9hrs
  2 + 9 = 11 hours duration
  return [7, 8, 8, 10, 10, 11]
*/

function choreAssignment(chores) {
  return chores
    .sort((a, b) => {
      // массив сортируеться по возрастанию [ 1, 2, 2, 2, 2, 4, 4, 5, 6, 8, 9, 9 ]
      return a - b;
    })
    .map((cur, idx) => {
      // [chores.length - idx - 1] получит индексы массива начиная с конца  11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
      // chores[chores.length - idx - 1] получить элементы массива начния с конца и до первого

      /*
        1.  1 + 9 = 10
        2.  2 + 9 = 11
        3.  2 + 8 = 10
        4.  2 + 6 = 8
        5.  2 + 5 = 7
        6.  4 + 4 = 8
        7.  4 + 4 = 8
        8.  5 + 2 = 7
        9.  6 + 2 = 8
        10. 8 + 2 = 10
        11. 9 + 2 = 11
        12. 9 + 1 = 10
      */

      return cur + chores[chores.length - idx - 1] // сумма первого элемента с последним
    })
    .splice(chores.length / 2) // вернуть вторую часть массива
    .sort((a, b) => a - b); // отсортировать вторую часть массива
}

console.log(choreAssignment([1, 5, 2, 8, 4, 9, 6, 4, 2, 2, 2, 9])) // [7, 8, 8, 10, 10, 11]

// node Help-Suzuki-complete-his-chores.js