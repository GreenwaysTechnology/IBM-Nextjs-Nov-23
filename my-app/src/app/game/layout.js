export default function GameLayout(props) {
    return <div id="gamelayout">
        {/* Game Page  */}
        {props.children}
        <hr />
        {/* Team Page  props.folderName */}
        {props.team}
        {/* Analytics Page props.folderName */}
        {props.anaylitics}
    </div>
}