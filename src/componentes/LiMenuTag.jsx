const LiMenuTag = ({tituloDeMenu, referencia, active}) => {
    return (
        <li className={`nav-item ${active}`} >
             <a className="nav-link d-flex justify-content-start" href={referencia}>{tituloDeMenu}</a>
        </li>
    );
}
export default LiMenuTag 