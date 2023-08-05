
import styled from '@emotion/styled';
import Header from '../Components/Header/Header';
import styles from './styles'; // déplacez votre fichier App.css dans un répertoire 'styles' à la racine
const Div = styled('div')(`${styles.mainContainer}`)
export default function MyApp() {
  return (
    <Div className='mainContainer'>
      <Header title='Illicogreen' />
    </Div>
  );
}
