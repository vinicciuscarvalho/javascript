const soma = (...valores) => {
    const somar = val => {
        let res = 0
        for (let v of val) {
            res += v
        }
        return res
    }

    return somar(valores)
}

soma(1, 2, 3, 4, 5) // 15