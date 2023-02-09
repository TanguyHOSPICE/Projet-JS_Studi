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
						// alert('1');
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
						// alert('3');
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

//10- Validation d'un champ REQUIRED : validateRequired
function validateRequired(input) {
	return !(input.value == null || input.value == '');
}

//15- Validation du nb de string : MIN & MAX
function validateLength(input, minLength, maxLength) {
	return !(input.value.length < minLength || input.value.length > maxLength);
}

//17- Validation des string : LATIN & LETTRES
function validateText(input) {
	//doit matcher avec REGEX choisi (regexr.com): je veux ts les elt qui vont de A-Z et a-z +
	return input.value.match('^[A-Za-z]+$');
}

//19- Validation email
function validateEmail(input) {
	let EMAIL = input.value;
	let POSAT = EMAIL.indexOf('@');
	let POSDOT = EMAIL.lastIndexOf('.');

	return !(POSAT < 1 || POSDOT - POSAT < 2);
}

//20- Validation code postale
function validatePostCode(input) {
	return input.value.match('^(0[1-9]|[1-9][0-9])[0-9][0-9][0-9]$');
}

//21- Validation addresse : n° & type & nom
function validateAddress(input) {
	return input.value.match(/^\s*\S+(?:\s+\S+){2}/);
}

//22- Validation du Numéro de téléphone
function validatePhoneNumber(input) {
	return input.value.match(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);
}

//23- Validation d'un checkbox
function validateTerms(input) {
	return input.checked;
}

//=============== START - VALIDATION DU FORMULAIRE ===============//
//11- Validations globales : creation fonction qui récup ttes validations = validateFields
function validateFields(input) {
	//12- Récup champ des inputs - une fs récup lancer la validation
	let fieldName = input.name;
	//13- condition pr lancer la valid.
	if (fieldName == 'firstName') {
		//14- lance validation
		if (!validateRequired(input)) {
			return false;
		}

		//16- lance validation validateLength
		if (!validateLength(input, 2, 20)) {
			return false;
		}

		//18- lance validation validateText
		if (!validateText(input)) {
			return false;
		}

		return true;
	}
	//19a- condition pr lancer la valid.
	if (fieldName == 'email') {
		if (!validateRequired(input)) {
			return false;
		}
		//19b- lance validation validateEmail
		if (!validateEmail(input)) {
			return false;
		}
		return true;
	}

	//22a- Validaton de l'input NUMERO DE TELEPHONE
	if (fieldName == 'phoneNumber') {
		if (!validateRequired(input)) {
			return false;
		}

		if (!validatePhoneNumber(input)) {
			return false;
		}

		return true;
	}
	//21a- condition pr lancer la valid.
	if (fieldName == 'address') {
		if (!validateRequired(input)) {
			return false;
		}
		//21b- lance validation validateAddress
		if (!validateAddress(input)) {
			return false;
		}
		return true;
	}
	//20a- condition pr lancer la valid.
	if (fieldName == 'postCode') {
		if (!validateRequired(input)) {
			return false;
		}
		//20b- lance validation validatePostCode
		if (!validatePostCode(input)) {
			return false;
		}
		return true;
	}
	//23a- Validaton de la checkbox CONDTIONS
	if (fieldName == 'conditions') {
		if (!validateTerms(input)) {
			return false;
		}

		return true;
	}
}
//=============== END - VALIDATION DU FORMULAIRE ===============//
