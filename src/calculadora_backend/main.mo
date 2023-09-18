import RBTree "mo:base/RBTree";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Iter "mo:base/Iter";


actor {

  public func add(a: Nat, b: Nat) : async Nat {
    a + b
  };

  public func subtract(a: Nat, b: Nat) : async Nat {
    if (a >= b) {
      a - b
    } else {
      // En caso de que a sea menor que b, retornar 0 o manejar el error según sea necesario.
      0
    }
  };

  public func multiply(a: Nat, b: Nat) : async Nat {
    a * b
  };

  public func divide(a: Nat, b: Nat) : async Text {
    if (b == 0) {
      "Error: Division by zero"
    } else {
      Nat.toText(a / b)
    }
  };
};
