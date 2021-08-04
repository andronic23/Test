//1. Ce numim o componenta in react?
   // O componenta reprezinta o funtie sau o clasa, ce poate primi parametri (props), 
   // insa trebuie sa returneze doar un element.
//2. Cum "fabricam" o componenta?
   // La crearea unei componente:
   //     1. functionale avem nevoie de o denumire ( ce o scrim cu litera mare), 
   //       optional de argumente "props" si returnarea elementului DOM.
   //     2. a unei clase este nevoie de extinderea unei componente in React.Component,
   //       de funtia obligatorie de render() ce returneaza elementul DOM
// 3. Rescrieti acest cod <MyComponent property="value" /> fara utilizarea sintaxei JSX
    //       React.createElement(MyComponent, {property: 'value'}
// 4. Ce reprezinta "props" in terminologia react?
    // props sunt proprietatile ce sunt utilizate pentru a transmite date de la o componenta la alta
    // , aceste date sunt transmise intr-un flux unidimensional ( de la parinte la copil) si aceste 
    // date sunt doar citite adica daca copilul are acces la proprietatile parintelui, componenta copilului
    // nu ar trebui sa modifice aceste proprietati.
 //5. Atunci cand intr-o componenta trebuie transmisa o valoare fixa in template, care din urmatoarele 
 //  doua variante este sintaxa corecta (cu argumente):
 //  a. <MyComponent value=1000 /> b. <MyComponent value="1000" /> c. <MyComponent value={1000} />
    // valorile fixe se includ ca c. <MyComponent value={1000} /> 
// 6. In ce caz o componenta in JSX este scrisa cu PAIRED TAG?
    // o pereche de taguri in JSX se utilizeaza doar in cazul in care avem nevoie sa transmitem mai multe elemente
    // intr-o componenta, aceasta pereche de taguri a componentei cu mai multe elemente returnate va fi grupata 
    // intr-un sigur container (aceasta o va face JSX)
 //7. Rescrieti urmatorul cod (unde componenta Child este inclusa in componenta Parent de 3 ori) 
 //   utilizand doar SINGLE TAG pentru "Parent"!!! in JSX

function Parent(props) { 
  return (<div>
            <div> This is the {props.first} child!) </div>
            <div> This is the {props.second} child!) </div>
            <div> This is the {props.third} child!)  </div>
          </div>)
}

// variable with all values
const comment = {
  first:'One',
  second: 'Two',
  third: 'Three',
};

// main component, rewrite the code here
function App() {
  return (
    <div>
      <Parent 
        first={comment.first}
        second={comment.second}
        third={comment.third}
       />      
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//  8. Aveti urmatorul cod, rescrieti codul astfel incat proprietatea transmisa "customContent" sa se numeasca "custom-content"
function MyComponent(props) {
  const custom = {
    customContent: 'custom-content'
  };
  return <div>{props.custom}</div>;
}

// main component, rewrite the code here
function App() {
  return (
    <div>
      <MyComponent custom="This is some text for testing!" />
    </div>
  );
}  
  //am inclus intr-o variabila denumirea cu cratima
