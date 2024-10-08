import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addAge, addCount, chageName, minusCount } from "../store";

function Cart(){
    let state  = useSelector((state) => state)
    let dispatch = useDispatch()
    return (
        <div>
            {state.user.name}의 장바구니
            {state.user.age}의 나이
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a, i) => (
                            <tr key={i}>
                                <td>1</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <button onClick={()=> {
                                        dispatch(chageName('dohui'))
                                        dispatch(addAge(2))
                                        dispatch(addCount(i))
                                    }}>+</button>
                                </td>
                                <td>
                                    <button onClick={()=> {
                                        dispatch(minusCount(i))
                                    }}>-</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Cart;