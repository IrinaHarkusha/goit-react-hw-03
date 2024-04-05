
const SearchBox = ({ searchStr, setSearch }) => {
  return (
    <div>
      <input value={searchStr} onChange={e => setSearch(e.target.value)} className="input" type='text' placeholder="Enter contact name..." />
    </div>
  )
}

export default SearchBox

//

// Поле пошуку – це інпут без форми, значення якого записується у стан (контрольований елемент).
// Логіка фільтрації повинна бути нечутливою до регістру.


// Стан фільтру слід зберігати в компоненті App і передавати потрібні значення як пропси компоненту SearchBox. Тоді фільтрація масиву контактів буде виконуватися в компоненті App, а її результат - масив відфільтрованих контактів - передавати пропсом компоненту ContactList.