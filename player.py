class Player:

    def __init__(self, name, props=None):
        self.name = name
        self.props = props if props is not None else []

    def __str__(self):
        border = "*" * (len(self.name) + 6)
        return f"{border}\n** {self.name} **\n{border}"

    def __repr__(self):
        border = "*" * (len(self.name) + 6)
        return f"{border}\n** {self.name} **\n{border}"

    def add_prop(self, prop):
        self.props.append(prop)


class Prop:

    def __init__(self, name, over, under):
        self.name = name
        self.over_line = over[0]
        self.over_cost = over[1]
        self.under_line = under[0]
        self.under_cost = under[1]

    def __repr__(self):
        return f"{self.name}:\t{self.over_line} {self.over_cost}\t{self.under_line} {self.under_cost}"

    def __str__(self):
        return f"{self.name}:\t{self.over_line} {self.over_cost}\t{self.under_line} {self.under_cost}"
