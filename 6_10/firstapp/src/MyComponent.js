const MyComponent = props => {
    return <div>안냥하세요 제 이름은 {props.name} 입니다.</div>
}
MyComponent.defaultprops = {
    name : "기본이름"
};
export default MyComponent