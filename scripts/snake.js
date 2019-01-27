class Snake {
    constructor(position, length=1) {
        //The tail is the beginning of the array, head is at the end of the array
        this.position = [position]
    }

    //Getter
    get position() {
        return this.position
    }

    get length() {
        return this.position.length
    }

    //Setter
    set position(position) {
        this.position = position
    }

    /**
     * Snake should grow by one
     */
    eatFood() {
        
    }

    moveSnake(direction) {
        let i = 0
        while (i < this.position.length) {
            let pos = this.position.pop(0)
            switch (direction) {
                case 'left':
                case 'right':
                case 'up':
                case 'down':
            }
            this.position.push(pos)
            i += 1
        }
    }

    /**
     * Returns true if snake hits its tail
     */

    

    
}