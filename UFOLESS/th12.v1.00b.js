{
	"COMMENT": "UFOLESS: UFO tokens no longer summon UFOs; collecting one gives a life piece, a bomb piece or PIV. Every life piece is worth 1/5.",
	"binhacks": {
		"ufoless.collect_token": {
			"title": "Token collection: red 1/5 life, green 1/3 bomb, blue +1000 PIV (0x4270b0)",
			"addr": "0x4270b0",
			"expected": "83ec145355",
			"code": "e9 [codecave:ufoless.collect_token]"
		},
		"ufoless.life_piece_always_1": {
			"title": "Boss life pieces are always worth 1/5 (the original gave 2/5 when the counter was 0)",
			"addr": "0x426bb9",
			"expected": "b902000000",
			"code": "b901000000"
		},
		"ufoless.hide_token_hud": {
			"title": "Don't draw the HUD token bar (front.anm scripts 79/80)",
			"addr": "0x41f450",
			"expected": "8dbeb8540000 bb04000000",
			"code": "8dbe88670000 31db eb19 90"
		},
		"ufoless.no_token_sparkle": {
			"title": "No 'this token completes a UFO' sparkle (there are no UFOs to complete)",
			"addr": "0x426591",
			"expected": "7c17",
			"code": "9090"
		}
	},
	"codecaves": {
		"ufoless.collect_token": "53 8bd9 83f801 7422 83f802 7411 b8400c4b00 b901000000 e8[0x422d30] eb3d b8400c4b00 e8[0x422e10] eb31 a1780c4b00 8b0df40c4b00 05a0860100 3bc1 7e02 8bc1 a3780c4b00 6880ff80ff 8d836c090000 50 b8e8030000 e8[0x43e250] 33c0 5b c3"
	}
}
