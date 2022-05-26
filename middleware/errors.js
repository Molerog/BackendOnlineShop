const handleValidationError = (err, res) => {
    let errors = err.errors.map(el => el.message);
    if(errors.length > 1) {
        let chain = "";
        for (let i = 0; i < errors.length; i++) {
          chain += errors[i] + " || ";
        }
        const string = chain.slice(0, -4);
        res.status(400).send({messages: string});
    } else {
        res.status(400).send({messages: errors});
    }
 }

const typeError = (err, req, res, next) => {
    const errOrigin = err.origin
    if(err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError'){
        return err = handleValidationError(err, res);
    }  else if (errOrigin === 'Review'){
           res.status(500).send('We had an issue creating the Review...');
        } else if (errOrigin === 'User'){
            res.status(500).send('We had an issue creating the User...');
        } else if (errOrigin === 'Product') {
            res.status(500).send('We had an issue creating the Product...');
        } else if (errOrigin === 'Order'){
            res.status(500).send('We had an issue creating tue Order...');
        }
        else {
            res.status(500).send('There is an error in your sintaxis...');
        }  
    }

module.exports = { typeError }