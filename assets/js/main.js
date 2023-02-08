// On part de la fonction issue de BOOTSTRAP
// Example starter JavaScript for disabling form submissions if there are invalid fields
//=============== START - DECLARATION DU FORMULAIRE ===============//
(function () {
	'use strict';
	// 1- Déclaration form
	let form = document.getElementById('lessonForm');

	// 2- addEventListener au submit qui lance fonction ac 1 event
	form.addEventListener(
		'submit',
		function (event) {
			//3- On mets tous les elts du form ds 1 tbl : Array.from(form.elements)
			Array.from(form.elements).forEach((input) => {
				//4- Chq type de input diff de submit
				if (input.type !== 'submit') {
					//5- On rentre tous les input ds tbl et les valident 1par1
					if (!validateFields(input)) {
						//Ajout lors des Validations
						alert('1');
						//6- Stopper absolument la validation
						event.preventDefault();
						//7- Stopper absolument les propagations
						event.stopPropagation();

						//8- Stylisation input (avec Bootstrap)
						//8-a. Add&Remove class
						input.classList.remove('is-valid');
						input.classList.add('is-invalid');
						//8-b. Search elt à coté & donne un style
						input.nextElementSibling.style.display = 'block';
					} else {
						//Ajout lors des Validations
						alert('3');
						//9-écriture de l'inv à 8-
						input.nextElementSibling.style.display = 'none';
						input.classList.remove('is-invalid');
						input.classList.add('is-valid');
					}
				}
			});
		},
		false
	);
})();
//=============== END - DECLARATION DU FORMULAIRE ===============//
//=============== START - VALIDATION DU FORMULAIRE ===============//

//10- Validation d'un champ REQUIRED : validateRequired
function validateRequired(input) {
	return !(input.value == null || input.value == '');
}

//11- creation fonction qui récup ttes validations : validateFields
function validateFields(input) {
	//12- Récup champ des inputs - une fs récup lancer la validation
	let fieldName = input.name;
	//13- condition pr lancer la valid.
	if (fieldName == 'firstName') {
		//14- lance validation
		if (!validateRequired(input)) {
			return false;
		}

		return true;
	}
}
//=============== END - VALIDATION DU FORMULAIRE ===============//
