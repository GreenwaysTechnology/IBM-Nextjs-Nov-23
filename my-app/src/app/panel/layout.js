export default function PanelLayout(props) {
    const isAdmin = true
    return <div>
        {props.children}
        {isAdmin ? props.AdminPanel : props.UserPanel}
    </div>
}