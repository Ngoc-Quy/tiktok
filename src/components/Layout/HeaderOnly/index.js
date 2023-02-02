import Header from '../components/Header';

function HeaderOnly({ childen }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{childen}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
