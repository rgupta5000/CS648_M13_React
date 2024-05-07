window.addEventListener('load', () => {
    const empForm = document.getElementById('empForm');
    
    const processForm = form => {
        const inputs = Array.from(form.elements);
        inputs.slice(0, -1).forEach(input => { console.log(`${input.id.toUpperCase()}: ${input.value}`);});
    };
  
    empForm.addEventListener('submit', event => {
      event.preventDefault();
      processForm(event.target);
    });
  });