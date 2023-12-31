import { NavLink } from "react-router-dom";
import styles from './_EANavListComp.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/types";
import { falseStyle } from "../../../redux/actions";

const EANavListComp = () => {

  const stylesReducer = useSelector((state: RootState) => state.styles.styles);

  const dispatch = useDispatch<any>();

  const handleClick = () => {
    console.log('click en NavLixt');
    dispatch(falseStyle() );
  };

  const navListStyles = `${styles.navList} ${stylesReducer ? styles.show : ''}`;

  return (
    <ul className={navListStyles} >
        <li onClick={handleClick} >
          <NavLink
            to="/" 
            className={styles.navLink} 
           >Inicio</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/exploagro" 
            className={styles.navLink} 
           >Empresa</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        <li onClick={handleClick} >
          <NavLink
            to="/exploagro/product" 
            className={styles.navLink} 
           >Producto</NavLink>
        </li>
        <li className={styles.splitBar}></li>
        {/* <li onClick={handleClick} >
          <NavLink
            to="#" 
            className={styles.navLink} 
           >Registrarse</NavLink>
        </li> */}
        {/* <li onClick={handleClick} >
          <NavLink
            to="#" 
            className={styles.navLink} 
           >Ingresar</NavLink>
        </li> */}
        <li onClick={handleClick} >
          <NavLink
            to="/exploagro/contact" 
            className={styles.navLink} 
           >Contacto</NavLink>
        </li>
      </ul>
  )
}

export default EANavListComp
