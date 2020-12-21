import { useDispatch, useSelector } from 'react-redux';
import {addListWishAC} from "../../redux/actionCreators";
import {useState} from "react";
function AddWishListForm()  {
    const [inputText, setInputText] = useState(null)
    const gifts = 'aaaa'
      const dispatchAdd = useDispatch()
    const addWishList = (e) => {
        e.preventDefault()
        dispatchAdd(addListWishAC(inputText))
        // const {name: {value: name}} = e.target;
        fetch('/wishlists', {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
            },
            body: JSON.stringify({inputText: inputText, gifts: gifts})
        })
            .then(res => res.json())
            // .then(notePad => dispatch(addNotepadAC([notePad]))
            // ).catch(err => alert(err));



    }

    return (

<>
                <form onSubmit={addWishList}>
            < input type="text"
                name="wishListName"
                placeholder="Введите название нового листа желаний"
                onChange={(e) => setInputText(e.target.value)}
                    required/>
                <button type = "submit" >add</button>

                </form>
</>

            )
            }
            export default AddWishListForm
