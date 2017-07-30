export class Init {
    load() {
        if (localStorage.getItem ('todos') === null || localStorage.getItem === undefined) {
          console.log('No Todos Faund.. Creating...');
        var todos = [
            {
                text: 'AngualrJS 2'
            },
            {
                text: 'Servlets & JSP'
            },
            {
                text: 'UI & PS'
            },
        ];
        localStorage.setItem('todos', JSON.stringify(todos));
        return;
    } else {
           console.log('Found Todos...');
        }
    }
}
