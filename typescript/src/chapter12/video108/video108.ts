export { };

console.log("video 108")

class Lion {
    name: string | undefined;
    color: string | undefined;

    sleep() {
        console.log("dang ngu: ", this.name)
    }

}

const sutu1 = new Lion();

sutu1.color = "yellow";
sutu1.name = "bia"
sutu1.sleep();
console.log("===========================")
const sutu2 = new Lion();

sutu1.color = "white";
sutu1.name = "Thai"
sutu1.sleep();