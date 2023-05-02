class Player:

    def __init__(self, name, props=None):
        self.name = name
        self.props = props if props is not None else []

    def add_prop(self, prop):
        self.props.append(prop)

    def has_props(self):
        return len(self.props) > 0

    def __str__(self):
        border = "*" * (len(self.name) + 6)
        return f"{border}\n** {self.name} **\n{border}"


class Prop:

    def __init__(self, name, line, over_cost, under_cost):
        self.name = name
        self.line = float(line)
        self.over_cost = float(over_cost)
        self.under_cost = float(under_cost)

    def __str__(self):
        return f"{self.name}:\t{self.line} (O {self.over_cost}) (U {self.under_cost})"
