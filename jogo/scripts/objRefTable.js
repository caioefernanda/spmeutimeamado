const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.solid,
		C3.Behaviors.Physics,
		C3.Behaviors.MoveTo,
		C3.Behaviors.DragnDrop,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Behaviors.MoveTo.Acts.SetSpeed,
		C3.Behaviors.MoveTo.Acts.MoveToObject
	];
};
self.C3_JsPropNameTable = [
	{Plataforma: 0},
	{CentrarEm: 0},
	{Carro: 0},
	{Sólido: 0},
	{Chão: 0},
	{fundo: 0},
	{Física: 0},
	{monster: 0},
	{chãoDoDepósito: 0},
	{fundoDeposito: 0},
	{caixaBraba: 0},
	{carrinho: 0},
	{fundoMercado: 0},
	{chãodomercado: 0},
	{avgaljclz: 0},
	{consumidor: 0},
	{maças: 0},
	{Parededetijolos: 0},
	{MoverPara: 0},
	{prego: 0},
	{fundopretocomluzdepontodefoco_: 0},
	{puxarPrego: 0},
	{ArrastarSoltar: 0},
	{martelo: 0},
	{GettyImages: 0},
	{pngclipartastronautastronautthumbnailremovebgpreview: 0},
	{chãolunar: 0}
];

self.InstanceType = {
	Carro: class extends self.ISpriteInstance {},
	Chão: class extends self.ISpriteInstance {},
	fundo: class extends self.ISpriteInstance {},
	monster: class extends self.ISpriteInstance {},
	chãoDoDepósito: class extends self.ISpriteInstance {},
	fundoDeposito: class extends self.ISpriteInstance {},
	caixaBraba: class extends self.ISpriteInstance {},
	carrinho: class extends self.ISpriteInstance {},
	fundoMercado: class extends self.ISpriteInstance {},
	chãodomercado: class extends self.ISpriteInstance {},
	avgaljclz: class extends self.ISpriteInstance {},
	consumidor: class extends self.ISpriteInstance {},
	maças: class extends self.ISpriteInstance {},
	Parededetijolos: class extends self.ISpriteInstance {},
	prego: class extends self.ISpriteInstance {},
	fundopretocomluzdepontodefoco_: class extends self.ISpriteInstance {},
	puxarPrego: class extends self.ISpriteInstance {},
	martelo: class extends self.ISpriteInstance {},
	GettyImages: class extends self.ISpriteInstance {},
	pngclipartastronautastronautthumbnailremovebgpreview: class extends self.ISpriteInstance {},
	chãolunar: class extends self.ISpriteInstance {}
}