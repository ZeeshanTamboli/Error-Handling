const user = { email: 'john@doe.com' };

try {
  //Produce a reference error
  // myFunction();

  //Produce a Type Error
  // null.myFunction();

  //Will produce a Syntax Error
  // eval('Hello World');

  //URIError
  //decodeURIComponent('%');

  if (!user.name) {
    throw 'User has no name';
  }
} catch (e) {
  console.log(e);
  // console.log(e.message);
  // console.log(e.name);
  // console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs regardless of result');
}

console.log('Program continues....');
