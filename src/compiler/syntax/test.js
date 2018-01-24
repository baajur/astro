const { print } = require('../utils');
const Parser = require('./parser');


print('name  nom');
print(new Parser('name  nom').parseIdentifier());
print('name_ 5');
print(new Parser('name_ 5').parseIdentifier());
print(' name'); // fail
print(new Parser(' name').parseIdentifier()); // fail
print(''); // fail
print(new Parser('').parseIdentifier()); // fail
print('_na99_me_ age');
print(new Parser('_na99_me_ age').parseIdentifier());
print('_na99_me_ age');
print(new Parser('_na99_me_ age').parseIdentifier());
print('99');
print(new Parser('99').parseInteger());
print('9978');
print(new Parser('9978').parseInteger());
print('997890e747');
print(new Parser('997890e747').parseInteger());
print(' 997890e747'); // fail
print(new Parser(' 997890e747').parseInteger()); // fail
print('\t\t997890e747');
print(new Parser('\t\t997890e747').parseSpaces());
print(' \t997890e747');
print(new Parser(' \t997890e747').parseSpaces());
print('     997890e747');
print(new Parser('     997890e747').parseSpaces());
print('let');
print(new Parser('let').parseToken('let'));
print('var');
print(new Parser('var').parseToken('var'));
print('name');
print(new Parser('name').parseToken('name'));
print('name');
print(new Parser('name').parseExpression());
print('4455');
print(new Parser('4455').parseExpression());
print('var 4 = age'); // fail
print(new Parser('var 4 = age').parseSubjectDeclaration()); // fail
print('mut x = age'); // fail
print(new Parser('mut x = age').parseSubjectDeclaration()); // fail
print('let x = $$$'); // fail
print(new Parser('let x = $$$').parseSubjectDeclaration()); // fail
print('var nim =age'); // fail
print(new Parser('var nim =age').parseSubjectDeclaration()); // fail
print('var nim= age'); // fail
print(new Parser('var nim= age').parseSubjectDeclaration()); // fail
print('let name = 678');
print(new Parser('let name = 678').parseSubjectDeclaration());
print('var _n77m_m=age');
print(new Parser('var _n77m_m=age').parseSubjectDeclaration());
print('fun 4() = age'); // fail
print(new Parser('fun 4() = age').parseFunctionDeclaration()); // fail
print('mut x() = age'); // fail
print(new Parser('mut x() = age').parseFunctionDeclaration()); // fail
print('fun x() = $$$'); // fail
print(new Parser('fun x() = $$$').parseFunctionDeclaration()); // fail
print('fun nim() =age'); // fail
print(new Parser('fun nim() =age').parseFunctionDeclaration()); // fail
print('fun nim()= age'); // fail
print(new Parser('fun nim()= age').parseFunctionDeclaration()); // fail
print('fun name() = 678');
print(new Parser('fun name() = 678').parseFunctionDeclaration());
print('fun _n77m_m()=age');
print(new Parser('fun _n77m_m()=age').parseFunctionDeclaration());
print('fun _n77m_m ( ) = age');
print(new Parser('fun _n77m_m ( ) = age').parseFunctionDeclaration());