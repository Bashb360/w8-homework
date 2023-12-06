import withColor from './withColor';
import ColorButton from './ColorButton';
import './App.css'

const ColorButtonWithColor = withColor(ColorButton);

const App = () => {
  return (
    <div>
      <ColorButtonWithColor />
    </div>
  );
};

export default App;
