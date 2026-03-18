import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        TP Hooks Avancés – Niveau Débutant
      </h1>

      <div className="max-w-xl mx-auto flex flex-col gap-6">

        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Compteur avec useReducer</h2>
          <Compteur />
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Mettre le focus avec useRef</h2>
          <FocusInput />
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Compteur de rendus</h2>
          <CompteurRendu />
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Liste d'articles avec useFetch</h2>
          <ListeArticles />
        </section>

        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Timer avec nettoyage d'effet</h2>
          <Timer />
        </section>

      </div>
    </div>
  );
}

export default App;